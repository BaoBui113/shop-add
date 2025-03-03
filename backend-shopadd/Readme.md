npx sequelize-cli db:migrate

npx sequelize-cli model:generate --name News --attributes title:string,image:text,content:text
npx sequelize-cli model:generate --name Banner --attributes name:string,image:text,status:integer
npx sequelize-cli model:generate --name Order --attributes userId:integer,total:integer,note:text,status:integer
npx sequelize-cli model:generate --name Product --attributes name:string,price:integer,oldPrice:integer,image:text,description:text,specification:text,buyTurn:integer,quantity:integer,brandId:integer,categoryId:integer
npx sequelize-cli model:generate --name OrderDetail --attributes orderId:integer,productId:integer,price:integer,quantity:integer
npx sequelize-cli model:generate --name BannerDetail --attributes productId:integer,bannerId:integer
npx sequelize-cli model:generate --name FeedBack --attributes productId:integer,userId:integer,star:integer,content:text
npx sequelize-cli model:generate --name NewsDetail --attributes productId:integer,newsId:integer
