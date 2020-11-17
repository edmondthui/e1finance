# == Schema Information
#
# Table name: holdings
#
#  id         :bigint           not null, primary key
#  quantity   :float            not null
#  user_id    :integer          not null
#  stock_id   :integer          not null
#  pie_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class HoldingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
