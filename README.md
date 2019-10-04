## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,add_index: true|
|email|string|null: false, unipue: true|

### Associatuion
- has_many :group_users
- has_many :groups,through: groups_users
- has-many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: true,null: false,nuipue: true|

### Association
- has_many :group_users
- has_many :users,through: groups_users
- has_many :messages

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|group|integer|null: false, foreign_key: true|
|user|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
