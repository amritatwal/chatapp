Love Notes

General idea:
- Web application where people can sign up to find a match
- Aim is to allow users to find a match to send handwritten letters to 
- Users can have sign up and have profiles to see matches and manage information
- Data on users is stored in a ElephantSQL database
  * CRUD: should be able to utilise all four commands when sending requests to the database server 
- It will be set-up as a RESTful API, adhering to the architectural style
  * The API can be called via each of the four common HTTP request methods 
  * URIs created that adhere to REST convention i.e. /users (meaning the application's users)

# Database Structure
- Table: users
- Columns: 
    ### Basic 
    1. User_ID
    2. Username
    3. Password (needs to be properly stored elsewhere but fine here for now)
    4. Email
    5. First name
    6. Last name
    7. Date of birth
    8. City
    9. Country

    ### Personal
    1. Education
    2. Occupation
    3. Interested in
    4. Ethnicity 
    5. Smoker
    6. Drinker
    7. Religion

    ### Preferences
    1. Children 
    2. ...
  
- Users will be able to:
    1. Create a profile
    2. Delete a profile
    3. Update a profile
    4. Get matches 

# API
1. Using Express
2. Should be able to CRUD via HTTP request methods
   1. Get all users (matches)(exact or nearest match)
   2. Post a new user
   3. Update a profile
   4. Delete a profile (based on ID and correct password)

