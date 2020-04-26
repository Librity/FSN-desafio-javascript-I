import { Request, Response, NextFunction } from 'express';
import Youch, {} from 'youch';

export default async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(err, req)
      .addLink(({ message }: any) => {
        const url = `https://stackoverflow.com/search?q=${encodeURIComponent(
          `[express] ${message}`
        )}`;

        return `<a href="${url}" target="_blank" title="Search on stackoverflow"><i class="fab fa-stack-overflow"></i></a>`;
      })
      .addLink(({ message }: any) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(
          `express ${message}`
        )}`;

        return `<a href="${url}" target="_blank" title="Search on google"><i class="fab fa-google"></i></a>`;
      })
      .toHTML();

    return res.status(500).send(errors).end();
  }

  return res.status(500).render('errors/500');
};
