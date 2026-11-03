# Business case: voice agent for field maintenance

**For a mid-size charge point operator, the base case returns about €181k a year in avoided costs and recovered revenue, against about €63k of first-year cost (≈2.9x), with payback in about 2 months.** The value comes mainly from fewer second visits, not from automation for its own sake.

> All figures are **illustrative assumptions** for a fictional operator (VoltaRete). In a real engagement every input below is replaced with the customer's own data during discovery. Agent pricing is a deal structure proposal, not a vendor price list.

---

## 1. The problem

Field maintenance on EV chargers fails in predictable ways:

- **Second visits.** A technician arrives, can't resolve the fault with the information at hand, and a second visit is booked. Each one costs travel, labour and charger downtime.
- **Remote support bottleneck.** Technicians call a support desk to read procedures or check charger status. Those calls queue, and the desk becomes the constraint.
- **Incomplete tickets.** Escalations reach second-level engineers without the error code, the steps already tried or the right priority, and get bounced back.
- **Safety exposure.** Under time pressure, technicians may attempt interventions beyond their qualification.

A hands-free voice agent addresses all four at the moment they happen: on site, in front of the charger.

## 2. Baseline assumptions

| Input | Value | Note |
| --- | --- | --- |
| Corrective field visits per month | 600 | Fleet of roughly 2,500–3,000 charge points |
| Second-visit rate today | 25% | Visits that need a return trip to resolve |
| Second-visit rate with the agent | 18% | 7-point reduction; see sensitivity below |
| Fully loaded cost of a field visit | €180 | Technician time, travel, vehicle |
| Visits that involve a support call today | 60% | |
| Average support call duration | 12 min | |
| Support desk cost | €35 / hour | Fully loaded |
| Days of downtime saved per avoided second visit | 2 | |
| Revenue per DC charger per day | €60 | Lost while the charger is down |

## 3. Value model

| Value driver | Calculation | Per month | Per year |
| --- | --- | --- | --- |
| Avoided second visits | 600 × 7% = 42 visits × €180 | €7,560 | €90,720 |
| Recovered charging revenue | 42 visits × 2 days × €60 | €5,040 | €60,480 |
| Support desk time freed | 600 × 60% × 12 min = 72 h × €35 | €2,520 | €30,240 |
| **Total** | | **€15,120** | **€181,440** |

Not counted, but real: fewer bounced escalations, consistent ticket data for root-cause analysis, and a documented safety barrier (the agent refuses out-of-scope electrical work and escalates insulation faults as P1 every time).

### Sensitivity

The second-visit reduction is the input that matters most, so it is the one the pilot has to prove.

| Scenario | Second-visit reduction | Avoided visits / month | Annual value |
| --- | --- | --- | --- |
| Conservative | 3 points | 18 | €95,040 |
| Base | 7 points | 42 | €181,440 |
| Optimistic | 10 points | 60 | €246,240 |

Support desk savings are held constant across scenarios.

## 4. Proposed commercial structure

A mix that keeps the customer's risk low and ties a share of the fee to the outcome they care about:

| Component | Structure | Base case, year 1 |
| --- | --- | --- |
| Implementation | One-off fee: discovery, knowledge base build, integrations, pilot | €25,000 |
| Platform | Fixed monthly fee, including agent usage up to an agreed volume | €1,500 / month → €18,000 |
| Outcome | €40 per **verified** avoided second visit, measured against the pilot baseline, with an annual cap | 42 × €40 × 12 → €20,160 |
| **Total year 1** | | **€63,160** |

- **Return:** €181,440 / €63,160 ≈ **2.9x** in year 1 (≈1.8x in the conservative case).
- **Payback:** about **2 months** in the base case, about 4–5 months in the conservative case.
- **Why outcome-based:** the customer pays more only when second visits actually fall, which makes the decision easy for operations and finance. The vendor shares the upside and has a reason to keep improving the agent after go-live.
- **Measurement rule:** "verified" means a fault code that historically needed a return visit, resolved on the first visit with the agent in the conversation log, and no reopened ticket within 14 days.

## 5. Rollout plan

| Phase | Duration | What happens | Exit criteria |
| --- | --- | --- | --- |
| Discovery | 2 weeks | Ride along with technicians, map the top 10 fault codes by second-visit cost, collect procedures | Agreed baseline and target metrics |
| Build | 3 weeks | Knowledge base from the customer's procedures, integration with the field service system, safety rules as automated tests | All safety tests pass |
| Pilot | 6 weeks | One region, 10–15 technicians, weekly review of conversations | Second-visit reduction ≥ 3 points, zero safety violations, technician satisfaction ≥ 4/5 |
| Scale | Ongoing | Rollout by region, add fault codes and languages | Outcome fee starts on verified results |

## 6. KPIs

- **First-time fix rate** and second-visit rate, per fault code.
- **Ticket completeness:** share of escalations accepted by second level without follow-up questions.
- **Priority accuracy:** share of tickets whose priority second level confirms.
- **Safety:** refusals on out-of-scope requests (target 100% on the test set); zero incidents.
- **Adoption:** share of corrective visits where the agent is used; technician satisfaction.

## 7. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Procedures are outdated or scattered | Discovery includes a knowledge base clean-up, owned by the customer's maintenance lead |
| Speech recognition in noisy sites and regional accents | Test on real recordings before the pilot; push-to-talk fallback; codes confirmed back |
| Technicians don't adopt it | Co-design with pilot technicians; agent fits their flow (one step at a time, hands-free) |
| Model breaks a safety rule | Critical rules enforced server-side as well as in the prompt; automated test suite on every change |
| Value is hard to attribute | Outcome fee tied to a measurement rule agreed before the pilot |
