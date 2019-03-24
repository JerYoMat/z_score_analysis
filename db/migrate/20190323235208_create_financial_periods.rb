class CreateFinancialPeriods < ActiveRecord::Migration[5.2]
  def change
    create_table :financial_periods do |t|
      t.belongs_to :company
      t.integer :fiscalyear
      t.string :periodenddate
      t.integer :ebit
      t.integer :totalcurrentassets
      t.integer :totalcurrentliabilities
      t.integer :totalassets 
      t.integer :retainedearnings
      t.integer :totalliabilities
      t.integer :totalrevenue
      t.timestamps
    end
  end
end
