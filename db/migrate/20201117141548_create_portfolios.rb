class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.string :portfolio_name, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :portfolios, :user_id, unique: true
  end
end
