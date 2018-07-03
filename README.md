# Recipe Finder
This project is developed for code test of Pactera.
The system allow users enter the items in fridge, and candidate recipes and recommend the recipe for dinner.       
It is based on express framework.

## Data

#### Item in the fridge: -- represented by CSV list
- **Item**: The name of item.
- **Amount**: The amount of item.
- **Unit**: The unit of measure.
- **Used-by**: The use by date.


#### Recipes: -- represented by JSON list
- **Name**: The name of the dish.
- **Ingredients**: List of items of the recipe.
  - **Item**: The name of item.
  - **Amount**: The amount of item.
  - **Unit**: The unit of measure.

## Running   
-  To run the server, navigate to the directory of the project and run following command in terminal:
```
npm start
```

- The server system is deployed on a personal virtual machine from [Tencent Cloud](https://intl.cloud.tencent.com/) of developer.

- Users are allowed to enter the amount of item in fridge and the amount of the recipe to custome amount of data. It is format free for users.

- Then, users are able to enter the detail data.

## Developer     
Siyu Zhang: paula555@outlook.com

## Copyright
- NodeJS: [Node.js](https://nodejs.org/en/)
        [GitHub - nodejs/node: Node.js JavaScript runtime](https://github.com/nodejs/node)
- Express.js: [Express - Node.js web application framework](https://expressjs.com/)
- JQuery:[jQuery](http://jquery.com/)
- Developing Tool: [WebStorm: The Smartest JavaScript IDE by JetBrains](https://www.jetbrains.com/webstorm/)
- Test Tool: [Katalon Studio: Best automated testing tool for web, mobile, API](https://www.katalon.com/)
- Resource:     
UI is extended the template which is from: [小贝壳网站模板 (Template)](http://www.smallseashell.com)    
[Tencent Cloud](https://intl.cloud.tencent.com/)

## License
- [Creative Commons Attribution 3.0 Unported | 小贝壳网站模板](http://creativecommons.org/licenses/by/3.0/)
- [License | jQuery Foundation](https://jquery.org/license/)
- [License | Node.js](https://raw.githubusercontent.com/nodejs/node/master/LICENSE)
- [express/LICENSE at master · expressjs/express · GitHub](https://github.com/expressjs/express/blob/master/LICENSE)

