import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { relatedItemValidationSchema } from 'validationSchema/related-items';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getRelatedItems();
    case 'POST':
      return createRelatedItem();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getRelatedItems() {
    const data = await prisma.related_item
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'related_item'));
    return res.status(200).json(data);
  }

  async function createRelatedItem() {
    await relatedItemValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.related_item.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
