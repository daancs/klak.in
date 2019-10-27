#!/usr/bin/env bash
set -ex
cd "$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null && pwd)"
STAGE=$1
DOCKER_USERNAME=$2
SHA=$3

if [[ $(docker ps -a | grep "alohomora_${STAGE}") ]]; then
	docker rm -f alohomora_${STAGE}
fi

gcloud auth activate-service-account --key-file=$HOME/cloud_key.json
gsutil cp gs://cool-secrets/${STAGE}.env /var/envs

docker run -d \
	--name alohomora_${STAGE} \
	--network swag \
	--env-file /var/envs/$STAGE.env \
	--label "traefik.enable=true" \
	--label "traefik.http.middlewares.https-redirect.redirectscheme.scheme=https" \
	--label "traefik.http.routers.alohomora_${STAGE}.entrypoints=web-secure" \
	--label "traefik.http.routers.alohomora_${STAGE}.rule=Host(\`api.staging.open.anton.pizza\`)" \
	--label "traefik.http.routers.alohomora_${STAGE}.tls=true" \
	--label "traefik.http.routers.alohomora_${STAGE}.tls.certresolver=anton-pizza" \
	$DOCKER_USERNAME/alohomora:$SHA
