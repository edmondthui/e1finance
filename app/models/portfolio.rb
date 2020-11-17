# == Schema Information
#
# Table name: portfolios
#
#  id             :bigint           not null, primary key
#  portfolio_name :string           not null
#  user_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Portfolio < ApplicationRecord

    validates :user_id, :portfolio_name, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :pies,
        foreign_key: :portfolio_id,
        class_name: :Pie

    def value
        value = 0
        pies = Pie.includes(:holdings).where(portfolio_id: self.id)
        pies.each do |pie|
            value += pie.value
        end
        value.round(2)
    end


end
