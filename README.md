# Dashboard App

Welcome to the Dashboard App! This app provides a comprehensive view of various graphical data and supports authentication using Google, GitHub, and Magic Link.

## Tech Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/)
  - [PrimeReact](https://www.primefaces.org/primereact/)
  - [PrimeFlex](https://www.primefaces.org/primeflex/)
  - [SCSS](https://sass-lang.com/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [NodeMailer](https://nodemailer.com/)

- **Database:**
  - [MongoDB Atlas](https://www.mongodb.com/)
  
- **Hosting:**
  - **Frontend:** [Vercel](https://dairfrontend-mehraankush.vercel.app/)
  - **Backend:** [AWS EC2](https://aws.amazon.com/ec2/)

## Features
- **Welcome Page** Explore various graphical representations of your data for better insights and decision-making.
   ![HomePage](https://github.com/mehraankush/TypeScript/blob/main/dair/home.gif)
  
- **Graphical Views:** Explore various graphical representations of your data for better insights and decision-making.
   ![Dashboard](https://github.com/mehraankush/TypeScript/blob/main/dair/Dashboard.gif)
  
- ## Authentication:
 Authentication is done with Passport.js, providing a secure and flexible authentication mechanism for the application. 
 All authenticated users are stored in the **MongoDB database**, ensuring seamless user management and data persistence.
   ![SignUpMethods](https://github.com/mehraankush/TypeScript/blob/main/dair/loginmethods.png)
  
  - **Google:** Sign in with your Google account for a seamless and secure experience.
     ![Google](https://github.com/mehraankush/TypeScript/blob/main/dair/google.png)
    
  - **GitHub:** Utilize your GitHub credentials for authentication.
  - **Magic Link:** Receive a magic link for hassle-free and secure sign-ins.
     ![SendingMagicLink](https://github.com/mehraankush/TypeScript/blob/main/dair/magiclink.png)
     ![Mailrecieved](https://github.com/mehraankush/TypeScript/blob/main/dair/Screenshot%202023-12-21%20025134.png)


# Challenges Faced

### 1. New Libraries (PrimeReact and PrimeFlex):
   - I have never worked with PrimeReact and PrimeFlex before Unfamiliarity with PrimeReact and PrimeFlex.
   - Because their styling syntax is very similar
     to Tailwind, which I have been using for a while, I found it a bit confusing.
   - It took me some time to digest the syntax and understand how to use it effectively.
   - Although I find PrimeReact very helpful, especially whenever I need anything related to components that are already there,
     I just need to fit my data in. That's why if somehow I get the chance to work with PrimeReact, then I would 
     love to explore more.

### 2. Learning Curve and Adaptation:
   - Transitioning from SCSS (previously familiar) to the styling approach of PrimeReact.
   - Adaptation to a new set of components and their customization.

### 3. Chart.js and Graphs:
   - Even though I have worked with Chart.js to some extent, in this project,
     but learned additional functionalities for line and bar graphs.
   - I have utilized line and bar graphs and added some animations to them. for enhanced user experience.

### 4. World Map Integration:
   - Faced challenges while finding and integrating a world map into the dashboard.
   - Successfully addressed difficulties to create a visually appealing map.

### 5. Design Phase:
   - Designed the entire dashboard in the initial two days.
   - Efficiently crafted the UI with a comprehensive understanding of requirements.

### 6. Deployment Challenges:
#### However, deployment was a part I struggled with a lot
   - Deployed the frontend on Vercel successfully and it's working fantastic.
   - But when it comes to the backend, I tried OnRender, SeeNode, and Railway, but none of them worked out well..
   - In the end, I deployed it on AWS for the first time in my life, and yes, it's working well and marking a significant accomplishment..

### 7. HTTP and HTTPS Conflict:
   - Encountered a conflict between HTTP and HTTPS after deploying frontend and backend separately.
   - Consulted experienced individuals, and a solution suggested was to purchase a domain to resolve the conflict.
   - That is the reasion that Magic-Link Signup is not working in prodection 😥.

### 8. Future Interest in PrimeReact:
   - Despite initial challenges, found PrimeReact highly helpful and would love to work with it again.
   - Appreciated the ease of fitting data into existing components.
