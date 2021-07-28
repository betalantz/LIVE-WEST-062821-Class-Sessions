## Stories

- [x] A user should be able to change the Animal Type filter/drop down 
- [x] A user should be able to click on the 'Find pets' button, and they will see
  all of pets _only_ for the type they specified 
- [x] A user can click on 'Adopt' to adopt that pet. They cannot un-adopt it. 


## Structure

- App
    - Filters
    - PetBrowser
        - Pet*

## Data Shape
```javascript
[
    {
      "id": "5c142d9e-ea45-4231-8146-cccf71c704c0",
      "type": "dog",
      "gender": "male",
      "age": 4,
      "weight": 1,
      "name": "Trident",
      "isAdopted": false
    },
    {...}
]
```