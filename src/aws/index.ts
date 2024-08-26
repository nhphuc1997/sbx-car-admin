import 'dotenv/config'

export const awscredentials = {
  credentials: {
    accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.APP_AWS_SECRET_KEY,
  },
  region: process.env.APP_AWS_REGION,
  bucket: process.env.APP_AWS_BUCKET,
};
