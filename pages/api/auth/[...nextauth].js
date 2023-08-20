// pages/api/auth/[...nextauth].js


module.exports = {
  providers: [
    {
      name: 'GitHub',
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: ['/'],
};
