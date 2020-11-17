# == Schema Information
#
# Table name: pies
#
#  id           :bigint           not null, primary key
#  pie_name     :string           not null
#  percentage   :float            not null
#  portfolio_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Pie < ApplicationRecord

    validates :pie_name, :percentage, :portfolio_id, presence: true
    validates :percentage, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 100}

    belongs_to :portfolio,
        foreign_key: :portfolio_id,
        class_name: :Portfolio

    has_many :holdings,
        foreign_key: :pie_id,
        class_name: :Holding

    has_many :stocks,
        through: :holdings,
        source: :stock


end
