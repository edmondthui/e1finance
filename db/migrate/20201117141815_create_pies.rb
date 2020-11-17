class CreatePies < ActiveRecord::Migration[5.2]
  def change
    create_table :pies do |t|
      t.string :pie_name, null: false
      t.float :percentage, null: false
      t.integer :portfolio_id, null: false
      t.timestamps
    end
    add_index :pies, :portfolio_id
  end
end
