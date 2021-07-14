-- 设置编码
SET NAMES utf8;

CREATE DATABASE IF NOT EXISTS campus DEFAULT CHARSET=utf8;
USE campus;


-- 创建管理员数据库
CREATE TABLE admininfo(
  a_id INT AUTO_INCREMENT PRIMARY KEY,
  a_unames VARCHAR(255) NOT NULL UNIQUE,
  a_pwd VARCHAR(255) NOT NULL 
) ENGINE = InnoDB charset = utf8;

-- 创建用户数据库
CREATE TABLE userinfo(
  u_id INT auto_increment PRIMARY KEY,
  u_names VARCHAR(255) NOT NULL,
  u_phone VARCHAR(255) NOT NULL UNIQUE,
  u_member INT NOT NULL
) ENGINE = innoDB charset = tuf8;
-- 创建用户简历数据库
                  


