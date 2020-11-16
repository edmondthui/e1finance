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

    private

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

end
