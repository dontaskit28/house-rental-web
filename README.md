# House Rental Web Application

This is a web application built with Next.js, Tailwind CSS, and Firebase that allows homeowners to sell or rent their houses, and customers to browse and rent or buy houses. The [application](https://house-rental-web.netlify.app/) is hosted on Netlify.

## Features

- User Authentication: Homeowners can create an account and log in to manage their properties, while customers can create accounts to browse and rent/buy houses.
- Property Listings: Homeowners can create property listings with details such as location, description, price, and availability. Customers can view and search for available properties.
- Rent/Buy Houses: Customers can browse the available properties, choose to rent or buy, and proceed with the transaction.
- Messaging: Users can communicate with each other through phone or mail provided to discuss property details, negotiate prices, and finalize the rental/buying process.


## Technologies Used

- Next.js: A React framework for server-side rendering and building modern web applications.
- Tailwind CSS: A utility-first CSS framework that provides pre-defined classes to rapidly build custom user interfaces.
- Firebase: A platform for building web and mobile applications, providing authentication, real-time database, and cloud storage functionalities.
- Netlify: A cloud hosting platform that simplifies the deployment and hosting of web applications.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/dontaskit28/house-rental-web.git`
2. Install dependencies: `cd house-rental-web && npm install`
3. Configure Firebase:
   - Create a new Firebase project at [https://firebase.google.com](https://firebase.google.com).
   - Obtain your Firebase configuration details (API keys, etc.) and update the `.env` file with the required variables.
   - Set up Firebase Authentication and Firestore database according to the project requirements.
4. Start the development server: `npm run dev`
5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment

This project is hosted on Netlify. To deploy your own version, follow these steps:

1. Set up a Netlify account at [https://www.netlify.com](https://www.netlify.com) if you don't already have one.
2. Connect your GitHub repository to Netlify and configure the deployment settings.
3. Ensure the required environment variables are set in your Netlify project settings, similar to the `.env` file used for local development.
4. Trigger a new deployment from the Netlify dashboard, and Netlify will automatically build and deploy the application.
5. Once the deployment is complete, you will receive a URL where your application is hosted.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
