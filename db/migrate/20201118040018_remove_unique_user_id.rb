class RemoveUniqueUserId < ActiveRecord::Migration[5.2]
  def change
    remove_index :portfolios, :user_id
    add_index :portfolios, :user_id
  end
end
