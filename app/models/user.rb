class User < ApplicationRecord
  has_many :favorites
  has_many :companies, through: :favorites
end
