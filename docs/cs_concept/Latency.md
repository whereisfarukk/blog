## Access Time

| System Event                                    |    Actual Latency    |        Scaled Latency |
| ----------------------------------------------- | :------------------: | --------------------: |
| $\textrm{One CPU cycle}$                        |  $\textrm{0.4 ns}$   |        $\textrm{1 s}$ |
| $\textrm{Level 1 cache access}$                 |  $\textrm{0.9 ns}$   |        $\textrm{2 s}$ |
| $\textrm{Level 2 cache access}$                 |  $\textrm{2.8 ns}$   |        $\textrm{7 s}$ |
| $\textrm{Level 3 cache access}$                 |   $\textrm{28 ns}$   |      $\textrm{1 min}$ |
| $\textrm{Main memory access (DDR DIMM) access}$ |  $\textrm{~100 ns}$  |      $\textrm{4 min}$ |
| $\textrm{IntelOptane memory access}$            |  $\textrm{<10 µs}$   |      $\textrm{7 hrs}$ |
| $\textrm{NVMe SSD I/O}$                         |  $\textrm{~25 µs}$   |     $\textrm{17 hrs}$ |
| $\textrm{SSD I/O}$                              | $\textrm{50-150 µs}$ | $\textrm{1.5-4 days}$ |
| $\textrm{Rotational disk I/O}$                  |  $\textrm{1-10 ms}$  | $\textrm{1-9 months}$ |
| $\textrm{Internet call: SF to NYC}$             |   $\textrm{65 ms}$   |    $\textrm{5 years}$ |
| $\textrm{Internet call: SF to Hong Kong}$       |  $\textrm{141 ms}$   |   $\textrm{11 years}$ |
