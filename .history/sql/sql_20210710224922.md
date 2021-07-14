## `database`
- campus
### `table`
1. admin_info
```sql
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| a_id    | int(11)      | NO   | PRI | NULL    | auto_increment |
| a_names | varchar(255) | NO   | UNI | NULL    |                |
| a_pwd   | varchar(255) | NO   |     | NULL    |                |
```
2. user_info