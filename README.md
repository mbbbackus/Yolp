Dependencies:
- djangorestframework
- django-cors-headers
- ?coverage
- create-react-app
- bootstrap
- reactstrap
- react-router-dom


Problem: Create a website that allows a user to do the following:
- A user should be able to create a restaurant. (Name, foodtype, address, rating etc.)
- A user should be presented with a list of restaurants.
- A user should be taken to a details page of the restaurant based on the restaurant they select.
- A user should be able to edit and delete a restaurant.
- A user should be able to submit a rating.
- A user should be able to sort the list of restaurants by Highest Rated.
- There should be a seperation between the data and view layer.
- The app should be extensible.


Design: I used Django REST framework for the API in tandem with a React SPA (Single Page App). Therefore bulk of the code is frontend based. I went with this design because it would allow more functionality on the webpage, it would be easier to dynamically generate profile pages for each restaurant, and this solution scales better and is more maintainable. There is currently no security or login/authentication since it wasn't apparent to me that those would be essential features for this challenge. 


Tradeoffs: I intended for it to be possible for the user to update profile images for their restaurants. I almost managed to fit this feature in but I hit a roadblock with respect to making PUT api calls containing uploaded image files. Consequentially, a user cannot update or create a restaurant from the frontend, but if I were to remove the profile images then that feature would be fully functional. I did not get to the sorting restaurants by rating feature due to time.


Extra TODOs:
- Add menu model
- Store smaller versions of restaurant profile pictures
- Contact info, force phone and email syntax
- Add warning modal for deleting restaurant
- use snake case for 'foodtype' parameter 
- incorporate image upload into create/edit modal



linkedIn Profile: https://www.linkedin.com/in/ben-backus-72845492/
