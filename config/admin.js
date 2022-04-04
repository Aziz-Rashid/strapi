module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4f6090a0aa8c5e4529f2edbaea2417ea'),
  },
});
