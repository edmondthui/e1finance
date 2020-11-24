# == Schema Information
#
# Table name: pies
#
#  id           :bigint           not null, primary key
#  pie_name     :string           not null
#  portfolio_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Pie < ApplicationRecord

    validates :pie_name, :portfolio_id, presence: true


    belongs_to :portfolio,
        foreign_key: :portfolio_id,
        class_name: :Portfolio

    has_many :holdings,
        foreign_key: :pie_id,
        class_name: :Holding,
        dependent: :destroy

    has_many :stocks,
        through: :holdings,
        source: :stock

    def value
        value = 0
        holdings.each do |holding|
            value += holding.quantity * Stock.where(id: holding.stock_id)[0].price
        end
        value.round(2)
    end

end
