import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const workflow = readFileSync('.github/workflows/ci.yml', 'utf8');

describe('deployment workflow', () => {
  it('publishes and triggers Coolify for main pushes and manual dispatches', () => {
    expect(workflow).toContain('workflow_dispatch:');
    expect(workflow).toContain(
      "if: github.ref == 'refs/heads/main' && (github.event_name == 'push' || github.event_name == 'workflow_dispatch')"
    );
    expect(workflow).toContain('COOLIFY_DEPLOY_URL: ${{ secrets.COOLIFY_DEPLOY_URL }}');
    expect(workflow).toContain('COOLIFY_API_TOKEN: ${{ secrets.COOLIFY_API_TOKEN }}');
    expect(workflow).not.toContain('COOLIFY_DEPLOY_WEBHOOK');
    expect(workflow).not.toContain('COOLIFY_DEPLOY_WEBHOOK_SECRET');
    expect(workflow).toContain('/api/v1/deploy?uuid=');
    expect(workflow).toContain('Manual Git webhook URLs cannot trigger pre-built image deployments.');
    expect(workflow).toContain('--header "Authorization: Bearer $COOLIFY_API_TOKEN"');
    expect(workflow).toContain('Coolify did not queue a deployment.');
  });
});
