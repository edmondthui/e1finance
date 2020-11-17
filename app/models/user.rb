# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  buying_power    :float            not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# require 'bcrypt'

class User < ApplicationRecord

    validates :session_token, :password_digest, presence: true
    validates :email, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token, :ensure_buying_power

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password);
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_buying_power
        self.buying_power ||= 1000000
    end

    has_many :portfolios,
        foreign_key: :user_id,
        class_name: :Portfolio

    private

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

end
