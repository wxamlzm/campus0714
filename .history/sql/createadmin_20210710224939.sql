SET NAMES utf8;

CREATE DATABASE IF NOT EXISTS campus CHARSET=utf8;

USE campus;

CREATE TABLE admin_info(
  a_id INT AUTO_INCREMENT PRIMARY KEY,
  a_names VARCHAR(255) NOT NULL UNIQUE,
  a_pwd VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARSET = utf8;

CREATE TABLE admin_info(
  a_id INT AUTO_INCREMENT PRIMARY KEY,
  a_names VARCHAR(255) NOT NULL UNIQUE,
  a_pwd VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARSET = utf8;