CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email_address varchar(255) NOT NULL,
  phone_number varchar(255) NOT NULL,
  user_password varchar(255) NOT NULL,
  favourite_movies varchar(255) default NULL,
  created_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (first_name,last_name,email_address,phone_number,user_password,favourite_movies)
    VALUES
        ('john','doe','john@gmail.com','07082079883','$2b$08$MRcqy3Sq5Svl.3Yja8XOL.Nq77KTKeM57.t/Y11qLSfdZkbxrVo8S','tt11138512');
