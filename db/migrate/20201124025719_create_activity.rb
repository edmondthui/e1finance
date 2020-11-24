class CreateActivity < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :activity, null: false
      t.string :name, null: false
      t.float :value, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :activities, :user_id
  end
end
