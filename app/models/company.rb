class Company < ApplicationRecord
  has_many :financial_periods
  has_many :favorites
end
