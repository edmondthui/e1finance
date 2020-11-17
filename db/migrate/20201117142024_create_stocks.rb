class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :ticker, null: false
      t.string :name, null: false
      t.float :price, null: false
      t.timestamps
    end
    add_index :stocks, :ticker, unique: true
    add_index :stocks, :name, unique: true
  end
end
