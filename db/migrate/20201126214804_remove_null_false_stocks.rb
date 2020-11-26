class RemoveNullFalseStocks < ActiveRecord::Migration[5.2]
  def change
    change_column :stocks, :name, :string, :null => true
    change_column :stocks, :price, :float, :null => true
  end
end
