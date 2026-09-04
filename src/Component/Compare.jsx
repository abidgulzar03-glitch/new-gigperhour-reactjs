function Compare() {
  return (
    <section className="compare-area">
      <div className="compare-wrap">

        <div className="compare-heading">
          <span>THE DIFFERENCE</span>
          <h2>Side by side</h2>
        </div>

        <div className="compare-table-box">
          <table className="compare-table">

            <thead>
              <tr>
                <th>Feature</th>
                <th className="compare-active">✦ GigPerHour</th>
                <th>Others (Upwork etc.)</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="compare-label">Platform Fee</td>
                <td className="compare-main" data-label="GigPerHour">5% flat</td>
                <td data-label="Others">Up to 20%</td>
              </tr>

              <tr>
                <td className="compare-label">Payment Speed</td>
                <td className="compare-main" data-label="GigPerHour">Within 24 hours</td>
                <td data-label="Others">5–14 business days</td>
              </tr>

              <tr>
                <td className="compare-label">Dispute Review</td>
                <td className="compare-main" data-label="GigPerHour">
                  <span className="compare-check">✓</span> Human-reviewed
                </td>
                <td data-label="Others">
                  <span className="compare-cross">✗</span> Automated
                </td>
              </tr>

              <tr>
                <td className="compare-label">Freelancer First</td>
                <td className="compare-main" data-label="GigPerHour">
                  <span className="compare-check">✓</span> Always
                </td>
                <td data-label="Others">
                  <span className="compare-cross">✗</span> Client-biased
                </td>
              </tr>

              <tr>
                <td className="compare-label">Transparent Policy</td>
                <td className="compare-main" data-label="GigPerHour">
                  <span className="compare-check">✓</span> Clear & stable
                </td>
                <td data-label="Others">
                  <span className="compare-cross">✗</span> Frequent changes
                </td>
              </tr>

              <tr>
                <td className="compare-label">Early Access Perks</td>
                <td className="compare-main" data-label="GigPerHour">
                  <span className="compare-check">✓</span> Lifetime discount
                </td>
                <td data-label="Others">
                  <span className="compare-cross">✗</span> None
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}

export default Compare;