This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


--------------------------------------------------------
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/nextjs-github-action.git
git remote add origin https://github.com/winnerboy7/nextjs-github-action.git
git push -u origin main

--------------------------------------------------------
# 1. Generate SSH key pair
ssh-keygen -t ed25519 -C "github-actions"
# Press Enter for default location (~/.ssh/id_ed25519)
# Press Enter for no passphrase (required for automation)

# 2. Add public key to authorized_keys
cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# 3. Get the private key (copy this to GitHub secret)
cat ~/.ssh/id_ed25519

--------------------------------------------------------
#Jenkins

mkdir jenkins_home

docker run -d --name jenkins-master -u root -p 8081:8080 -p 50000:50000 -v ~/jenkins_home:/var/jenkins_home jenkins/jenkins:lts

docker exec -it jenkins-master cat /var/jenkins_home/secrets/initialAdminPassword

http://209.15.110.99:8081/

e9ea2bdd9a25449eadf0ea6e8180f99d
Username: admin
Password: I3AIFERN

References:
https://www.melivecode.com/th/article/github-action-nextjs16#12-%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-github-actions-workflow