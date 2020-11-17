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
require 'test_helper'

class PortfolioTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
