from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the correct tab
        page.goto("http://localhost:8100/tabs/tab1", wait_until="networkidle")

        # Wait for the main content to be visible to ensure the page is loaded
        page.wait_for_selector('ion-content')

        # Wait for the card headers to be visible
        completed_race_header = page.locator("ion-card-header", has_text="Completed race")
        predicted_race_header = page.locator("ion-card-header", has_text="Predicted race")

        expect(completed_race_header).to_be_visible()
        expect(predicted_race_header).to_be_visible()

        # Give the page a moment to ensure all styles are applied
        page.wait_for_timeout(1000)

        # Take a screenshot of the page
        page.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    run_verification()