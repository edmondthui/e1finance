# == Schema Information
#
# Table name: holdings
#
#  id         :bigint           not null, primary key
#  quantity   :float            not null
#  user_id    :integer          not null
#  stock_id   :integer          not null
#  pie_id     :integer          
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Holding < ApplicationRecord

    validates :quantity, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :pie,
        foreign_key: :pie_id,
        class_name: :Pie

    belongs_to :stock,
        foreign_key: :stock_id,
        class_name: :Stock
end
