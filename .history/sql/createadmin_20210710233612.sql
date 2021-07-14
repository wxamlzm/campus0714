SET NAMES utf8;

CREATE DATABASE IF NOT EXISTS campus CHARSET=utf8;

USE campus;

CREATE TABLE admin_info(
  a_id INT AUTO_INCREMENT PRIMARY KEY,
  a_names VARCHAR(255) NOT NULL UNIQUE,
  a_pwd VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARSET = utf8;

CREATE TABLE user_info(
  u_id INT AUTO_INCREMENT PRIMARY KEY,
  u_names VARCHAR(255) NOT NULL UNIQUE,
  u_phone VARCHAR(255) NOT NULL UNIQUE,
  u_pwd VARCHAR(255) NOT NULL,
  u_log_time DATA                   --登录时间
) ENGINE = InnoDB CHARSET = utf8;


CREATE TABLE resume_info(
  re_id INT AUTO_INCREMENT PRIMARY KEY,
  re_names VARCHAR(255) NOT NULL UNIQUE,
  re_phone VARCHAR(255) NOT NULL UNIQUE,
  re_post VARCHAR(255) NOT NULL, --岗位
  re_u VARCHAR(255) NOT NULL,
  re_log_time DATA,  -- 登录时间
  re_xg_time DATA    -- 修改时间
) ENGINE = InnoDB CHARSET = utf8;