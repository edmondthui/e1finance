# == Schema Information
#
# Table name: activities
#
#  id         :bigint           not null, primary key
#  activity   :string           not null
#  name       :string           not null
#  value      :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Activity < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
        
end
