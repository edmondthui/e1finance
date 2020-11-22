class RemovePercentage < ActiveRecord::Migration[5.2]
  def change
    remove_column :pies, :percentage
  end
end
