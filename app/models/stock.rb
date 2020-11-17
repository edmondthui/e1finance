# == Schema Information
#
# Table name: stocks
#
#  id         :bigint           not null, primary key
#  ticker     :string           not null
#  name       :string           not null
#  price      :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Stock < ApplicationRecord

    # has_many :holdings,
    #     foreign_key: :stock_id,
    #     class_name: :Holding

    # has_many :pies,
    #     through: :holdings,
    #     source: :pie

    # has_many :users,
    #     through: :holdings,
    #     source: :user

    
end
