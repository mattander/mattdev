// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        message: `Hello, ${req.query.name ?? 'John Doe'}!`,
    });
}
