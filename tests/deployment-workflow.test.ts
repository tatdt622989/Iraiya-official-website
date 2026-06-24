import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const workflow = readFileSync('.github/workflows/ci.yml', 'utf8');

describe('deployment workflow', () => {
  it('publishes and triggers Coolify for main pushes and manual dispatches', () => {
    expect(workflow).toContain('workflow_dispatch:');
    expect(workflow).toContain(
      "if: github.ref == 'refs/heads/main' && (github.event_name == 'push' || github.event_name == 'workflow_dispatch')"
    );
    expect(workflow).toContain('COOLIFY_DEPLOY_WEBHOOK_SECRET: ${{ secrets.COOLIFY_DEPLOY_WEBHOOK_SECRET }}');
    expect(workflow).toContain('--header "Authorization: Bearer $COOLIFY_DEPLOY_WEBHOOK_SECRET"');
  });
});
