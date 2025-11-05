document.getElementById("clickme").addEventListener("click", () => {
  let html = `
                      <form id="check-availability-form" action="" method="post" novalidate class="needs-validation">
                        <div class="row">
                          <div id="reservation-dates-modal" class="row">
                              <div class="col">
                                    <input
                                      disabled
                                        type="text"
                                        class="form-control"
                                        name="start"
                                        required
                                        placeholder="Arrival "
                                        id="start"
                                        autocomplete="off"
                                    />
                                </div>
                                <div class="col">
                                    <input
                                      disabled
                                        type="text"
                                        class="form-control"
                                        name="end"
                                        required
                                        placeholder="Departure Date"
                                        id="end"
                                        autocomplete="off"
                                    />
                                </div>
                            </div>
                        </div>
                      </form>`;
  attention.custom({ msg: html, title: "Choose your dates" });
});
