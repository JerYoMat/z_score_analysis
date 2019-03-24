require 'pry'

hershey = Company.create!(
  companyname: 'HERSHEY CO',
  primarysymbol: 'HSY',
  primaryexchange: 'NYSE',
  siccode: "2060"

)
hershey.financial_periods.create!(
  fiscalyear: 2018,
  periodenddate: "12/31/2018",
  ebit: 1623664000,
  retainedearnings: 7032020000,
  totalassets: 2239181000,
  totalcurrentassets: 2239181000,
  totalcurrentliabilities: 241856600,
  totalliabilities: 6304299000,
  totalrevenue: 7791069000)

  sanfilippo = Company.create!(
    companyname: 'SANFILIPPO JOHN B & SON INC',
    primarysymbol: 'JBSS',
    primaryexchange: 'Nasdaq Global Market',
    siccode: "2060"
  
  )
  sanfilippo.financial_periods.create!(
    fiscalyear: 2018,
    periodenddate: "6/28/2018",
    ebit: 56109000,
    retainedearnings: 127240000,
    totalassets: 415773000,
    totalcurrentassets: 247802000,
    totalcurrentliabilities: 117193000,
    totalliabilities: 172851000,
    totalrevenue: 888595000)

  tootsie = Company.create!(
    companyname: 'TOOTSIE ROLL INDUSTRIES INC',
    primarysymbol: 'TR',
    primaryexchange: 'NYSE',
    siccode: "2060"
  )

  tootsie.financial_periods.create!(
    fiscalyear: 2018,
    periodenddate: "12/31/2018",
    ebit: 70482000,
    retainedearnings: 33767000,
    totalassets: 947361000,
    totalcurrentassets: 304046000,
    totalcurrentliabilities: 61391000,
    totalliabilities: 196739000,
    totalrevenue: 518920000)
