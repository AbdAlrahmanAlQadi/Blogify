
create database Blogs

create table  BlogsContent (
blogId int primary key identity(1,1),
blogName varchar(500) ,
blogAuthor varchar(500) ,
blogTitle varchar(500),
blogDescription varchar(500),
blogUrl varchar(500),
blogUrlToImage varchar(500),
blogPublishedAt date,
blogContent varchar(500)
)

insert into BlogsContent values('NDTV News','null','8-Hour Blackouts Hit India','An already sweltering summer and acute coal shortages','https://www.ndtv.com/india-news','https://c.ndtvimg.com/2022-04.jpg','2022-04-21T08:11:16Z','The blackouts across parts of India')
select * from BlogsContent
insert into BlogsContent values('Hindustan Times','HT News Desk','Top LeT commander Yousuf Kantroo','Yousuf Kantroo, a top LeT commander','https://www.hindustantimes.com/india-news','https://images.hindustantimes.com/img','2022-04-21T06:18:26Z','A top commander of the banned outfit Lashkar-e-Taiba')
insert into BlogsContent values('Citytoday.news','Murali','Liver cancer is increasing','Prime News, National, Karnataka','https://citytoday.news/liver','null','2022-04-21T05:41:53Z','Prime News, National, Karnataka, Health, Disease')
insert into BlogsContent values('Bollywood Life','Nikita Thakkar','Akshay Kumar, Rashmika Mandanna','Akshay Kumar had to issue an apology','https://www.bollywoodlife.com/photos','https://st1.bollywoodlife.com/wp','2022-04-21T05:24:49Z','Akshay Kumar is currently ruling the headlines')
update BlogsContent set blogPublishedAt = '2022-04-21T02:48:29Z' where blogId = 2
delete from BlogsContent where blogId = 4
insert into BlogsContent values('PINKVILLA','Pinkvilla Desk','Heres why Johnny Depps daughter Lily-Rose','Johnny Depp testified about his and Amber Heard','https://www.pinkvilla.com/entertainment','https://www.pinkvilla.com/files','2022-04-20T22:30:37Z','Johnny Depp, 58, has revealed surprising')
select * from BlogsContent
