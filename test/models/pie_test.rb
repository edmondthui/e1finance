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
require 'test_helper'

class PieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
