class CreateHoldings < ActiveRecord::Migration[5.2]
  def change
    create_table :holdings do |t|
      t.float :quantity, null: false
      t.integer :user_id, null: false
      t.integer :stock_id, null: false
      t.integer :pie_id
      t.timestamps
    end
    add_index :holdings, :user_id
    add_index :holdings, :stock_id
    add_index :holdings, :pie_id
  end
end
