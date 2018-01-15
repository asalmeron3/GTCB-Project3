# GoVoRep

This web app is designed to keep you up to date with politics, specifically in your voting district. You select your location from the map and you are presented with the curerent individuals that are running for a seat in the House of Representatives and the Senate. Along with the individuals, you are given their current stance on several topics of concern such as immigration laws, marijuana legalization, net neutrality, etc.

### System Requirements
For this applications, you will need the following:
	* Node_modules
	* React 
	* ReactDOM
	* react-scripts
	* passport

### User Interface

The idea behind the user interface is to provide the user basic instructions for finding their representatives. These instructions will be provided on the landing page. Once the user has read the instructions, the user will be taken to the "Location Page" where they can select the state/location where they have registered to vote. One selected, the user will be taken to the "Main Page" where they will be presented with their representatives. If the user would like to find specific information on their representative, they will be taken to the "Landing Page" where the user can see their representative's latest news, social media feed, and information which bills the representatives support or are against. Lastly, if the user wants to contact their representative, they will have the option to do so. This contact form will be presented via a "Contact Modal" where the user will be able to send their representative an email and be provided with their contact phone number. 

### Components

There will be several components involved with the different page:
	* "Instructions/Step" for each page. This component  will quickly tell the user what they need to do on the current page. 
	* An "Overview" component on the "Main Page" to tell the user the steps they will need to take. 
	* An "Address" component that will allow the user to enter their address instead of clicking on the map
	* A "Map" component that will let the user click on their location instead of typing in their address.
	* A "List" component that will display a list of representatives in the user's location.
	* A "Profile" component the displays a picture of the representative and links to their social media and website.
	* A "Column" component that will show news, social media feed, and information on bills.

### App
	* The app will be the constructor function needed to store the different information needed for the state data such as the instructions on each page. Additionally, will contain all the components that need to be rendered to the page.
